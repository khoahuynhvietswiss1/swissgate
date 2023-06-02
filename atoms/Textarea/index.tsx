import {twMerge} from "tailwind-merge";

type Props = {
  name: string;
  placeholder? : string;
  className?: string;
}

const Input = ({name,placeholder,className} : Props) => {
  return(
    <textarea
      className={twMerge('px-[20px] py-[10px] text-[18px] border-b-2 border-r-2 border-primary focus:outline-none focus-visible:outline-none placeholder:text-black',className)}
      name={name}
      placeholder={placeholder}

    />
  )
}
export default Input