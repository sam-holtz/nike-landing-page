const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="group flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-2xl shadow-card hover:shadow-card-hover px-10 py-16 bg-white transition-all duration-300 hover:-translate-y-1 border border-slate-100">
            <div className="w-14 h-14 flex justify-center items-center bg-coral-red rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <img src={imgURL} alt={label} width={28} height={28} />
            </div>
            <h3 className="font-palanquin mt-6 text-3xl leading-normal font-bold">{label}</h3>
            <p className="mt-3 break-words font-montserrat text-slate-gray leading-relaxed">{subtext}</p>
        </div>
    )
}

export default ServiceCard;