import { useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Search, Sparkles, X } from 'lucide-react'
import catalog from './catalog.json'

const subjects = ['All', ...Array.from(new Set(catalog.flatMap((item) => item.subjects))).sort()]
const accessOptions = ['All access', 'Completely free', 'Free learning / audit']
const matchesAccess = (item, access) => access === 'All access' || (access === 'Completely free' ? item.access === access : /free learning|audit/i.test(item.access))
const platformFor = (item) => item.platform || (item.url.includes('ocw.mit.edu') ? 'MIT OpenCourseWare' : item.url.includes('oyc.yale.edu') ? 'Open Yale Courses' : item.url.includes('open.edu/openlearn') ? 'OpenLearn' : item.url.includes('pll.harvard.edu') ? 'Harvard Online' : item.institution)

function AccessPill({ access }) {
  return <span className={`access-pill ${access === 'Completely free' ? 'open' : ''}`}><i />{access}</span>
}

function ResourceCard({ item, index }) {
  return <article className="resource-card">
    <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
    <div className="card-body">
      <div className="card-meta"><span>{item.institution}</span><span>{platformFor(item)}</span><span>{item.format}</span></div>
      <h3>{item.name}</h3><p>{item.description}</p>
      <div className="tags">{item.subjects.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
    </div>
    <div className="card-action"><div><AccessPill access={item.access} /><small>{item.certificate}</small></div><a href={item.url} target="_blank" rel="noreferrer" aria-label={`Open ${item.name}`}><ArrowUpRight /></a></div>
  </article>
}

export default function App() {
  const [query, setQuery] = useState(''); const [subject, setSubject] = useState('All'); const [platform, setPlatform] = useState('All platforms'); const [access, setAccess] = useState('All access'); const [showAll, setShowAll] = useState(false)
  const portals = catalog.filter((item) => item.kind === 'portal'); const courses = catalog.filter((item) => item.kind === 'course')
  const platforms = useMemo(() => ['All platforms', ...Array.from(new Set(courses.map(platformFor))).sort()], [courses])
  const results = useMemo(() => { const needle = query.trim().toLowerCase(); return courses.filter((item) => (!needle || `${item.name} ${item.institution} ${platformFor(item)} ${item.description} ${item.subjects.join(' ')}`.toLowerCase().includes(needle)) && (subject === 'All' || item.subjects.includes(subject)) && (platform === 'All platforms' || platformFor(item) === platform) && matchesAccess(item, access)) }, [query, subject, platform, access])
  const clear = () => { setQuery(''); setSubject('All'); setPlatform('All platforms'); setAccess('All access'); setShowAll(false) }
  return <>
    <header className="topbar"><a className="wordmark" href="#top"><b>FR</b><span>Free<br />Resources</span></a><nav><a href="#explore">Explore</a><a href="#universities">Universities</a><a href="#about">How it works</a></nav><a className="header-cta" href="#explore">Find a course <ArrowRight /></a></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><div className="eyebrow"><Sparkles /> Curated from official university sources</div><h1>Learn something<br />remarkable.<br /><em>For free.</em></h1><p>World-class courses, lectures, and learning materials—without the scavenger hunt. Every link goes to an official source, and every cost is clearly labeled.</p><div className="hero-actions"><a className="button" href="#explore">Explore the library <ArrowRight /></a><a className="text-link" href="#about">What “free” means <ArrowRight /></a></div></div><div className="hero-art"><div className="orbit"><span>MIT</span><span>YALE</span><span>HARVARD</span><span>CMU</span></div><div className="book-shape"><BookOpen /></div><small>OPEN<br />KNOWLEDGE</small></div><div className="hero-proof"><span><strong>{portals.length}</strong> university libraries</span><span><strong>{courses.length}</strong> hand-picked courses</span><span><strong>$0</strong> affiliate links</span></div></section>
      <section className="university-section" id="universities"><div className="section-label">01 / Start broad</div><div className="section-heading"><h2>Go straight to<br />the source.</h2><p>Explore an entire university catalog when you want room to wander. These official libraries offer hundreds—sometimes thousands—of free learning experiences.</p></div><div className="portal-grid">{portals.map((item, index) => <a className="portal-card" href={item.url} target="_blank" rel="noreferrer" key={item.id}><span className="portal-count">{String(index + 1).padStart(2, '0')}</span><div><span className="portal-institution">{item.institution}</span><h3>{item.name}</h3><p>{item.description}</p></div><div className="portal-footer"><AccessPill access={item.access} /><ArrowUpRight /></div></a>)}</div></section>
      <section className="explore-section" id="explore"><div className="section-label">02 / Find your next course</div><div className="section-heading"><h2>What are you<br />curious about?</h2><p>Search by topic, browse a subject, or filter by learning platform and access type.</p></div><div className="filter-panel"><label className="search-field"><Search /><span className="sr-only">Search courses</span><input type="search" value={query} onChange={(e) => { setQuery(e.target.value); setShowAll(false) }} placeholder="Try psychology, climate, finance…" />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X /></button>}</label><label className="select-field"><span>Subject</span><select value={subject} onChange={(e) => setSubject(e.target.value)}>{subjects.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown /></label><label className="select-field"><span>Platform</span><select value={platform} onChange={(e) => setPlatform(e.target.value)}>{platforms.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown /></label><label className="select-field"><span>Access</span><select value={access} onChange={(e) => setAccess(e.target.value)}>{accessOptions.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown /></label></div><div className="results-bar"><span><strong>{results.length}</strong> courses found</span>{(query || subject !== 'All' || platform !== 'All platforms' || access !== 'All access') && <button onClick={clear}>Clear filters</button>}</div>{results.length ? <><div className="resource-list">{(showAll ? results : results.slice(0, 6)).map((item, index) => <ResourceCard item={item} index={index} key={item.id} />)}</div>{results.length > 6 && <button className="load-more" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show fewer' : `Show all ${results.length}`} <ArrowRight /></button>}</> : <div className="empty-state"><BookOpen /><h3>Nothing matched.</h3><p>Try a broader topic or reset the filters.</p><button onClick={clear}>Reset filters</button></div>}</section>
      <section className="access-section" id="about"><div><div className="section-label light">03 / Know before you enroll</div><h2>Free should<br />feel clear.</h2><p>Universities use “free” in different ways. We separate access from credentials so you know exactly what to expect.</p></div><div className="access-steps">{[['Completely free','Materials are open at no cost. Usually no formal certificate is included.'],['Free to learn or audit','Core lessons are free; graded work or a verified credential may cost extra.'],['Verified at the source','We send you to the university—not an affiliate—to confirm current terms.']].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><Check /></article>)}</div></section>
    </main><footer><a className="wordmark inverted" href="#top"><b>FR</b><span>Free<br />Resources</span></a><p>Learning should be open. The fine print should be, too.</p><div><a href="#explore">Explore</a><a href="#universities">Universities</a><a href="#about">About access</a></div></footer>
  </>
}
