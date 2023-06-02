import {twMerge} from "tailwind-merge";

type Props = {
  name: string;
  placeholder? : string;
  type: 'text' | 'email' | 'password';
  className?: string;
}

const Input = ({name,placeholder,type,className} : Props) => {
  return(
    <input
      className={twMerge('px-[20px] py-[10px] text-[18px] rounded-full border border-black focus:outline-none focus-visible:outline-none placeholder:text-black',className)}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  )
}
export default Input