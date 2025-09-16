export default function Gallery(){
    return(
          <div className="lg:h-screen h-fit mb-12 w-full flex flex-col gap-3 justify-center items-center">
          <h1 className="font-bold text-2xl scroll-animate">گالری 
                   <span className="material-symbols-outlined text-amber-700">
volunteer_activism
</span>
          </h1>
          <h1 className="font-bold text-4xl scroll-animate">گالری از عکس های ما</h1>
        <div className="lg:h-[80%] h-fit lg:w-[90%] w-full scroll-animate flex flex-wrap justify-center items-center">
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-1.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-2.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-5.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-4.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-3.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-7.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-9.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-3.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-8.jpg)] "></div>
          <div className="lg:h-[250px] md:h-[230px] h-[190px]  lg:w-[250px] md:w-[230px] w-[190px] bg-no-repeat bg-cover bg-[url(../poblic/img/gallery-4.jpg)] "></div>
        </div>
        </div>
    )
}