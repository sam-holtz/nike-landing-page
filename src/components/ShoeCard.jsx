const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    const isSelected = bigShoeImg === imgURL.bigShoe;

    return (
        <div
            className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 transition-all duration-300 ${isSelected ? 'border-coral-red shadow-card-hover scale-105' : 'border-transparent hover:border-slate-300'}`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="Shoe Collection"
                    width={150}
                    height={100}
                    className="object-contain transition-transform duration-300"
                />
            </div>
        </div>
    )
}

export default ShoeCard;