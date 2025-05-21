import Image from "next/image"

const SliderContent = ({bgindex, sliderImage}) => {
  return (
    <section className="h-[600px]">
      {sliderImage.map((slide) => (
        <div key={slide.id} className={slide.id === bgindex ? "slide active" : "inactive"}>
          <Image src={slide.src} alt={slide.alt} style={{ objectFit: "cover", overflow:'hidden'}} className="h-[600px] brightness-50" />
        </div>
      ))}
    </section>
  )
}

export default SliderContent