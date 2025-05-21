import Image from "next/image"

const DocSlider = ({galIndex, galleryImage }) => {
  return (
    <section className="h-[300px] flex justify-center ">
      {galleryImage.map((slide) => (
        <div key={slide.id} className={slide.id === galIndex ? "slide active" : "inactive"}>
          <div className="flex">
            <Image src={slide.src} alt={slide.alt} style={{ objectFit: "cover", overflow:'hidden'}} className="h-[300px] w-[300px]"/>
          </div>
          
        </div>
      ))}
    </section>
  )
}

export default DocSlider