import Text from "@/atoms/Text";
import Input from "@/atoms/Input";
import Link from "next/link";
import IconButton from "@/atoms/IconButton";
import Svg from "@/atoms/Svg";
import ListSocial from "@/molecules/Icon/ListSocial";

const Footer = () => {

  const RenderSection1 = () => {
    return(
      <section>
        <div className={'mb-10'}>
          <Text className={'mb-2'} size={'xs'} font={'int'} renderAs={'p'}>
            Newsletter abonnieren
          </Text>
          <Input placeholder={'name@domain.ch'} className={'text-black w-[321px]'} name={'email'} type={'email'} />
        </div>
        <Text className={'mb-2'} renderAs={'p'} size={'xs'} font={'int'}>
          <Link href={'/faq'}>
            FAQ
          </Link>
        </Text>
        <Text className={'mb-2'} renderAs={'p'} size={'xs'} font={'int'}>
          <Link href={'/'}>
            Kontakt
          </Link>
        </Text>
        <Text className={'mb-2'} renderAs={'p'} size={'xs'} font={'int'}>
          <Link href={'/agb'}>
            AGB
          </Link>
        </Text>
        <Text className={'mb-2'} renderAs={'p'} size={'xs'} font={'int'}>
          <Link href={'/'}>
            Datenschutzerklärung
          </Link>
        </Text>
      </section>
    )
  }

  const RenderSection2 = () => {
    return(
      <section className={'max-lg:mt-10'}>
        <Text className={'mb-10 lg:mb-2'} size={'xs'} font={'int'} renderAs={'p'}>
          Marken
        </Text>
        <div className={'lg:mt-[60px] flex lg:items-center max-lg:flex-col gap-10 lg:gap-[64px]'}>
          <Svg icon={'cbuy'} />
          <Svg icon={'herbalea'} />
          <Svg icon={'donald'} />
        </div>
      </section>
    )
  }

  const RenderSection3 = () => {
    return(
      <section className={'max-lg:mt-10'}>
        <Text className={'mb-2 lg:mb-10'} renderAs={'p'} size={'xs'} font={'int'}>
          <Link href={'/'}>
            Impressum
          </Link>
        </Text>
        <ListSocial />
      </section>
    )
  }

  const RenderSection4 = () => {
    return(
      <section className={'max-lg:mt-10'}>
        <Text className={'mb-2 lg:mb-10'} renderAs={'p'} size={'xs'} font={'int'}>
          <Link href={'/'}>
            Sprache
          </Link>
        </Text>
        <IconButton variant={'primary'} classContainer={'w-[42px] h-[42px]'} classButton={'w-[42px] h-[42px]'} classIcon={'w-[27px]'} icon={'world'} />
      </section>
    )
  }

  return(
    <footer className={'bg-black px-[20px] lg:px-[40px] py-[30px] text-white '}>
      <table className={'w-full max-lg:hidden'}>
        <tbody>
          <tr>
            <td className={'align-top'}>
              <RenderSection1 />
            </td>
            <td className={'align-top'}>
              <RenderSection2 />
            </td>
          </tr>
          <tr>
            <td className={'align-top'}>
              <RenderSection3 />
            </td>
            <td className={'align-top'}>
              <RenderSection4 />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={'lg:hidden flex flex-col'}>
        <RenderSection1 />
        <RenderSection2 />
        <RenderSection3 />
        <RenderSection4 />
      </div>
    </footer>
  )
}
export default Footer