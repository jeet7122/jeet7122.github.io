import React from 'react'


export default function ContentSection({ id, title, children, className = '' }) {
return (
<section id={id} className={`py-20 lg:py-32 min-h-[50vh] ${className}`}>
<div className="container">
<h2 className="text-4xl text-muted font-extrabold mb-10 border-b-4 border-indigo-600 pb-2 inline-block">{title}</h2>
{children}
</div>
</section>
)
}