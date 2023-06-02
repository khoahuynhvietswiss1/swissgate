import IconText from "@/atoms/IconText";
import {IconType} from "@/types";

const MenuIcon = ({icon,text,haveHover = false,classIconContainer = ''} :
  {
    icon : IconType,
    text : string,
    haveHover? : boolean,
    classIconContainer?: string
  }
) =>{

  const RenderIcon = () => {
    switch (icon){
      case "menu-user":
        return <IconText haveHover={haveHover} classIconContainer={classIconContainer} font={'neue'}
                  size={'sm'}
                  classIcon={'mt-[10px]'}
                  icon={icon}>
          {text}
        </IconText>
      case "menu-marak":
        return <IconText haveHover={haveHover} classIconContainer={classIconContainer} font={'neue'}
                         size={'sm'}
                         classIcon={'w-[72px] -translate-x-[10px]'}
                         icon={icon}>
          {text}
        </IconText>
      case "menu-blog":
        return <IconText haveHover={haveHover} classIconContainer={classIconContainer} font={'neue'}
                         size={'sm'}
                         classIcon={'-translate-y-[15px]'}
                         icon={icon}>
          {text}
        </IconText>
      case "menu-investment":
        return <IconText haveHover={haveHover} classIconContainer={classIconContainer} font={'neue'}
                         size={'sm'}
                         classIcon={'translate-y-[10px]'}
                         icon={icon}>
          {text}
        </IconText>
      default:
        return <IconText haveHover={haveHover} classIconContainer={classIconContainer} font={'neue'}
                         size={'sm'}
                         icon={icon}>
          {text}
        </IconText>
    }
  }

  return(
    <>
      <RenderIcon />
    </>
  )
}

export default MenuIcon