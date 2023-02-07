export const styles = {
    paddindX :'sm:px-16 px-6',
    paddindY :'sm:py-16 py-6',
    paddind:'sm:px-16 px-6 sm:py-12 py-4',
    marginX :'sm:mx-16 mx-6',
    marginY:'sm:my-16 my-6',
    container:'xl:max-w-[1280px] w-full',
    flexBetween:'flex justify-center items-center',
    flexCenter:'flex justify-center items-center',
    flexStart:'flex justify-center items-start',
    paragraph:'font-montserrat font-normal text-lightWhite text-[18px] leading-[30.8px]',
    heading1:'font-montserrat font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]',
    heading2:'font-montserrat font-semibold xs:text-[40px] text-white xs:leading-[76.8px] leading-[6.8px] w-full',
}

export const layout ={
    section:`flex md:flex-row flex-col ${styles.paddindY}`,
    sectionReverse:`flex md:flex-row  flex-col-reverse ${styles.paddindY}`,
    sectionInfo :`flex-1 ${styles.flexStart} flex-col`,
    sectionImage:`flex-1 ${styles.flexCenter} md:ml-10 ml-0 relative`,
    sectionImageReverse:`flex-1 ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`
}