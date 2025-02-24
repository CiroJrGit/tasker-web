import { useState } from 'react'
import IconPlus from '../../assets/icons/IconPlus'
import IconCheck from '../../assets/icons/IconCheck'
import IconUpload from '../../assets/icons/upload'

const Upload = () => {
  const [upload, setUpload] = useState<boolean>(true)
  const [select, setSelect] = useState<boolean>(false)
  const [userBg, setUserBg] = useState<string>(
    'https://res.cloudinary.com/drz2gwbov/image/upload/v1740408948/rtokf8740sxk5wtjut4z.jpg',
  )

  return (
    <>
      {/* {!upload && (
        <button
          className={`
            w-[90px] h-[85px] rounded-md bg-cover bg-center border
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300 dark:hover:border-gray-300 hover:border-white-500
          `}
        >
          <IconPlus
            width="20"
            height="20"
            color="dark:stroke-gray-300 stroke-gray-300"
          />
        </button>
      )} */}

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
                justify-end items-end gap-1 w-full h-full py-1.5 px-2 rounded-md
                ${select ? 'flex bg-gray-300 bg-opacity-40' : 'hidden'}
                group-hover:flex
              `}
          >
            <div className="flex justify-center items-center w-6 h-6 pt-0.5 rounded-[5px] hover:bg-gray-200/70">
              <IconCheck
                width="18"
                height="18"
                color="stroke-white-950"
                stroke={select ? '1.8' : '1.3'}
              />
            </div>

            <div className="hidden justify-center items-center w-[26px] h-6 rounded-[5px] hover:bg-gray-200/70 group-hover:flex">
              <IconUpload
                width="16"
                height="16"
                color="stroke-white-950"
                stroke="1.3"
              />
            </div>
          </div>

          {/* <div
            className={`
                absolute top-0 justify-center items-center gap-1.5 w-full h-full py-1.5 px-2 rounded-md
                ${select ? 'flex' : 'hidden'}
                group-hover:flex
              `}
          >
            <div className="hidden justify-center items-center w-6 h-6 pt-1 rounded-[5px] dark:hover:bg-gray-300/60 group-hover:flex">
              <IconCheck
                width="18"
                height="18"
                color="stroke-white-950"
                stroke="1.3"
              />
            </div>

            <div className="hidden justify-center items-center w-6 h-6 rounded-[5px] dark:hover:bg-gray-300/60 group-hover:flex">
              <IconDownload
                width="17"
                height="17"
                color="stroke-white-950"
                stroke="1.7"
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
