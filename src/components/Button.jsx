const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, borderRadius, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat font-bold text-base leading-none rounded-xl transition-all duration-300 active:scale-[0.98]
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} ${borderRadius}` : 'bg-coral-red text-white border-coral-red hover:bg-coral-red/90 hover:shadow-card-hover shadow-card'} 
            ${fullWidth ? 'w-full' : ''}`}>
            {label}
            {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-sm w-5 h-5" />}
        </button>
    )
}

export default Button;