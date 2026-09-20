'use client'

import { useState } from 'react'
import { ArrowUpRight, CalendarDays, Camera, Menu, Scissors, X } from 'lucide-react'

const services = [
  { name: 'Coupe signature', detail: 'Consultation · coupe · mise en forme', price: 'à partir de 45 €' },
  { name: 'Coloration', detail: 'Gloss, balayage ou transformation', price: 'à partir de 85 €' },
  { name: 'Brushing', detail: 'Le geste Moskva, du naturel au sophistiqué', price: 'à partir de 25 €' },
  { name: 'Soin profond', detail: 'Rituel réparateur & massage du cuir chevelu', price: 'à partir de 35 €' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85', alt: 'Cheveux brillants coiffés en salon' },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85', alt: 'Coiffeuse réalisant une coloration' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85', alt: 'Détail d’une coupe courte texturée' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2ed] text-[#20201e]">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 md:px-10 md:py-7">
        <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Navigation principale">
          <a href="#accueil" className="font-serif text-2xl tracking-[-0.04em] md:text-3xl">MOSKVA <span className="font-sans text-[9px] font-semibold tracking-[0.28em] text-[#a64b37]">CITY</span></a>
          <div className="hidden items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#univers" className="transition-colors hover:text-[#a64b37]">L&apos;univers</a>
            <a href="#prestations" className="transition-colors hover:text-[#a64b37]">Prestations</a>
            <a href="#contact" className="transition-colors hover:text-[#a64b37]">Contact</a>
          </div>
          <button onClick={() => setBookingOpen(true)} className="hidden border border-[#20201e] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-[#20201e] hover:text-[#f5f2ed] md:block">Prendre rendez-vous</button>
          <button className="md:hidden" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(true)}><Menu size={23} strokeWidth={1.5} /></button>
        </nav>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 flex flex-col bg-[#20201e] p-6 text-[#f5f2ed] md:hidden"><div className="flex justify-end"><button aria-label="Fermer le menu" onClick={() => setMenuOpen(false)}><X /></button></div><div className="mt-20 flex flex-col gap-8 font-serif text-5xl"><a onClick={() => setMenuOpen(false)} href="#univers">L&apos;univers</a><a onClick={() => setMenuOpen(false)} href="#prestations">Prestations</a><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></div><button onClick={() => { setMenuOpen(false); setBookingOpen(true) }} className="mt-auto w-full bg-[#a64b37] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">Prendre rendez-vous</button></div>}

      <section id="accueil" className="relative flex min-h-[690px] items-end bg-[#d8cec1] px-5 pb-14 pt-32 md:min-h-[790px] md:px-10 md:pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=90')] bg-cover bg-center opacity-45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20201e]/75 via-transparent to-[#20201e]/10" />
        <div className="relative mx-auto w-full max-w-7xl text-[#f7f3ed]">
          <div className="mb-9 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em]"><span className="h-px w-10 bg-[#d9a08a]" /> Paris · 11e</div>
          <h1 className="max-w-3xl font-serif text-[clamp(4.5rem,12vw,10.5rem)] leading-[0.78] tracking-[-0.07em]">L&apos;allure<br /><em className="ml-[12%] font-light text-[#eab7a2]">libre.</em></h1>
          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"><p className="max-w-xs text-sm leading-6 text-[#eee7df]">Un salon de coiffure parisien où chaque détail compte. Des coupes qui vivent, des couleurs qui vous ressemblent.</p><a href="#univers" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">Découvrir Moskva <ArrowUpRight size={16} strokeWidth={1.3} /></a></div>
        </div>
        <div className="absolute bottom-8 right-10 hidden md:block"><span className="vertical-label text-[9px] uppercase tracking-[0.32em] text-[#f7f3ed]">Scroll to explore</span></div>
      </section>

      <section id="univers" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36"><div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-24"><div><p className="section-kicker">01 · Notre vision</p><h2 className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">Bien plus<br />qu&apos;une <em className="text-[#a64b37]">coupe.</em></h2></div><div className="max-w-lg self-end"><p className="text-xl leading-8 md:text-2xl md:leading-9">Moskva City est un espace de liberté, de conversation et de beauté. Ici, on écoute votre personnalité avant de toucher à vos cheveux.</p><p className="mt-8 text-sm leading-6 text-[#6e6963]">Notre équipe imagine des silhouettes singulières et faciles à vivre, avec une attention particulière portée au mouvement, à la matière et à la confiance.</p></div></div></section>

      <section id="prestations" className="bg-[#20201e] px-5 py-24 text-[#f5f2ed] md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="section-kicker text-[#d9a08a]">02 · Les essentiels</p><h2 className="mt-7 font-serif text-5xl tracking-[-0.05em] md:text-7xl">Le menu<br /><em className="font-light text-[#d9a08a]">Moskva.</em></h2></div><p className="max-w-xs text-sm leading-6 text-[#bab2aa]">Chaque rendez-vous commence par un échange. Les tarifs s&apos;adaptent à la longueur et à la densité de vos cheveux.</p></div><div className="mt-16 border-t border-white/20">{services.map((service, i) => <div key={service.name} className="group grid grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/20 py-7 md:grid-cols-[60px_1fr_auto] md:py-8"><span className="text-xs text-[#d9a08a]">0{i + 1}</span><div><h3 className="font-serif text-2xl md:text-3xl">{service.name}</h3><p className="mt-1 text-xs text-[#aaa39b]">{service.detail}</p></div><span className="text-right text-xs uppercase tracking-[0.12em] text-[#d9a08a]">{service.price}</span></div>)}</div><button onClick={() => setBookingOpen(true)} className="mt-12 flex items-center gap-3 border border-[#d9a08a] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9a08a] transition hover:bg-[#d9a08a] hover:text-[#20201e]">Réserver une parenthèse <CalendarDays size={15} strokeWidth={1.5} /></button></div></section>

      <section className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between"><div><p className="section-kicker">03 · L&apos;inspiration</p><h2 className="mt-7 font-serif text-5xl tracking-[-0.05em] md:text-7xl">Vu chez<br /><em className="text-[#a64b37]">Moskva.</em></h2></div><a href="https://www.instagram.com/salon_moskva_city" target="_blank" rel="noreferrer" aria-label="Voir Instagram de Moskva City" className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] md:flex">@salon_moskva_city <Camera size={16} strokeWidth={1.5} /></a></div><div className="grid gap-4 md:grid-cols-3">{gallery.map((item, i) => <div key={item.src} className={`group overflow-hidden ${i === 1 ? 'md:mt-14' : ''}`}><img src={item.src} alt={item.alt} className="aspect-[4/5] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /></div>)}</div></div></section>

      <footer id="contact" className="bg-[#d9a08a] px-5 py-16 md:px-10 md:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-12 md:grid-cols-2"><div><p className="section-kicker text-[#20201e]/70">04 · Venez nous voir</p><h2 className="mt-7 font-serif text-6xl leading-[0.88] tracking-[-0.06em] md:text-8xl">On se<br /><em>voit bientôt.</em></h2></div><div className="flex flex-col justify-between gap-10 md:items-end"><div className="space-y-4 text-sm md:text-right"><p>24 rue Oberkampf · 75011 Paris</p><p>Mar — Sam · 10h — 19h</p><a href="tel:+33143571248" className="block underline underline-offset-4">+33 1 43 57 12 48</a></div><button onClick={() => setBookingOpen(true)} className="w-full bg-[#20201e] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f2ed] transition hover:bg-[#a64b37] md:w-auto">Prendre rendez-vous <ArrowUpRight className="ml-3 inline" size={15} /></button></div></div><div className="mt-20 flex justify-between border-t border-[#20201e]/20 pt-5 text-[10px] uppercase tracking-[0.18em]"><span>© 2024 Moskva City</span><a href="https://www.instagram.com/salon_moskva_city" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></footer>

      {bookingOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#20201e]/70 p-5" role="dialog" aria-modal="true" aria-labelledby="booking-title"><div className="relative w-full max-w-md bg-[#f5f2ed] p-7 md:p-10"><button onClick={() => setBookingOpen(false)} aria-label="Fermer" className="absolute right-5 top-5"><X size={20} strokeWidth={1.5} /></button><Scissors size={22} strokeWidth={1.2} className="text-[#a64b37]" /><h2 id="booking-title" className="mt-5 font-serif text-4xl">Votre moment Moskva</h2><p className="mt-3 text-sm leading-6 text-[#6e6963]">Laissez-nous vos coordonnées, nous vous recontacterons pour trouver le créneau idéal.</p><form className="mt-7 space-y-4" onSubmit={(e) => { e.preventDefault(); setBookingOpen(false) }}><input required aria-label="Votre prénom" placeholder="Votre prénom" className="w-full border-b border-[#20201e]/30 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#8b847d] focus:border-[#a64b37]" /><input required type="tel" aria-label="Votre téléphone" placeholder="Votre téléphone" className="w-full border-b border-[#20201e]/30 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#8b847d] focus:border-[#a64b37]" /><select aria-label="Choisir une prestation" className="w-full border-b border-[#20201e]/30 bg-transparent px-0 py-3 text-sm outline-none"><option>Choisir une prestation</option><option>Coupe signature</option><option>Coloration</option><option>Brushing</option></select><button className="mt-5 w-full bg-[#20201e] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f2ed]">Envoyer ma demande</button></form></div></div>}
    </main>
  )
}
