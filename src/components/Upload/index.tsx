import { useState, ChangeEvent } from 'react'

// import { PagesContext } from '../../contexts/pagesContext'

import IconCheck from '../../assets/icons/IconCheck'
import IconUpload from '../../assets/icons/IconUpload'

const Upload = () => {
  const [file, setFile] = useState<File>()

  const [upload, setUpload] = useState<boolean>(false)
  const [select, setSelect] = useState<boolean>(false)
  const [userBg, setUserBg] = useState<string>(
    'https://res.cloudinary.com/drz2gwbov/image/upload/v1740408948/rtokf8740sxk5wtjut4z.jpg',
  )

  // const { handleBackgroundUpload } = useContext(PagesContext)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // if (e.target.files) {
    //   setFile(e.target.files[0])

    //   handleUpload()
    // }
    console.log(e.target.files)
  }

  // const handleUpload = () => {
  //   if (file) {
  //     setUserBg(handleBackgroundUpload(file).toString())
  //     setUpload(true)
  //     setSelect(true)
  //   }
  // }

  return (
    <>
      {!upload && (
        <div>
          <label
            className={`
            flex justify-center items-center w-[90px] h-[85px] rounded-md bg-cover bg-center border-dashed border-2 dark:border-gray-400 border-white-400
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 cursor-pointer
          `}
            htmlFor="upload-image"
          >
            {/* TO-DO: Revisar */}
            {/* <IconPlus
            width="20"
            height="20"
            color="dark:stroke-gray-300 stroke-gray-300"
            /> */}
            <IconUpload width="20" height="20" color="dark:stroke-gray-300 stroke-white-300" stroke="1.5" />
          </label>
          <input type="file" id="upload-image" className="hidden" accept="image/*" onChange={handleFileChange} />
        </div>
      )}

      {upload && (
        <button
          className={`
            relative w-[90px] h-[85px] rounded-md bg-cover bg-center border cursor-pointer group
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 dark:hover:border-gray-300 hover:border-white-500
            ${select ? 'dark:border-gray-100 border-gray-400' : 'dark:border-gray-900 border-white-900'}
          `}
          style={{ backgroundImage: `url(${userBg})` }}
          onClick={() => setSelect(!select)}
        >
          <div
            className={`
              relative justify-end items-end gap-1 w-full h-full py-1.5 px-2 rounded-md
              ${select ? 'flex bg-gray-300 bg-opacity-40' : 'hidden'}
              group-hover:flex
            `}
          >
            <div className="absolute bottom-0 right-0 flex justify-center items-center w-6 h-6 pt-0.5 my-1 mx-[5px] rounded-[5px] hover:bg-gray-200/70 group-hover:hidden">
              <IconCheck width="18" height="18" color="stroke-white-950" stroke="1.5" />
            </div>

            <div className="absolute bottom-0 right-0 hidden justify-center items-center w-[26px] h-[26px] my-1 mx-1.5 rounded-[5px] hover:bg-gray-200/70 group-hover:flex">
              <IconUpload width="17" height="17" color="stroke-white-950" stroke="1.5" />
            </div>
          </div>

          {/* TO-DO: Revisar */}
          {/* <div
            className={`
                absolute top-0 justify-center items-center gap-1.5 w-full h-full py-1.5 px-2 rounded-md
                ${select ? 'flex' : 'hidden'}
                group-hover:flex
              `}
          >
            <div className="hidden justify-center items-center w-6 h-6 pt-1 rounded-[5px] dark:hover:bg-gray-300/60 group-hover:flex">
              <IconCheck
                width="20"
                height="20"
                color="stroke-white-950"
                stroke="1.3"
              />
            </div>

            <div className="hidden justify-center items-center w-6 h-6 rounded-[5px] dark:hover:bg-gray-300/60 group-hover:flex">
              <IconUpload
                width="18"
                height="18"
                color="stroke-white-950"
                stroke="1.3"
              />
            </div>
          </div>

          <div
            className={`
                justify-end items-end gap-1 w-full h-full py-1.5 px-2 rounded-md
                ${select ? 'flex bg-gray-300 bg-opacity-40' : 'hidden'}
                group-hover:flex
              `}
          >
            <div className="flex justify-center items-center w-6 h-6 pt-1 rounded-[5px] dark:hover:bg-gray-300/60 group-hover:hidden">
              <IconCheck
                width="18"
                height="18"
                color="stroke-white-950"
                stroke="1.3"
              />
            </div>
          </div> */}
        </button>
      )}
    </>
  )
}

export default Upload
