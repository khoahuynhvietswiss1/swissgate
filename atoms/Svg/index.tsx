import data from './data.json';
import { IconType } from '@/types';
import {twMerge} from "tailwind-merge";

type Props = {
  icon: IconType;
  className?: string;
  fillTransparent?: boolean;
  onClick?: any
};
const SVG = ({ icon, className = '',fillTransparent = false, onClick }: Props) => {
  const _icon = data[icon];
  return (
    <div
      onClick={onClick ? onClick : ()=>{}}
      className={twMerge(fillTransparent ? 'fill-transparent' : 'fill-white',className)}
      dangerouslySetInnerHTML={{ __html: _icon }}
    />
  );
};
export default SVG;
