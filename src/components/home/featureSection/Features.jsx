// eslint-disable-next-line react/prop-types
function Features({ title, img, text }) {
    return (
        <div className="lg:w-1/3 bg-stone-800  shadow-xl shadow-slate-500 rounded-2xl flex items-center p-10 gap-10 flex-col font-serif text-stone-300">
            <h3 className="text-xl font-bold text-amber-300">{title}</h3>
            <img src={img} alt={title} />
            <p className="md:text-xl">{text}</p>
        </div>
    );
}

export default Features;
