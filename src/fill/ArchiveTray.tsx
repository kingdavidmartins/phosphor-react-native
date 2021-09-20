import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function ArchiveTray(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V159.88379c-.00049.03906-.00586.07715-.00586.11621s.00537.07715.00586.11621V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM88.40234,112.40137a8.0018,8.0018,0,0,1,11.31348,0L120,132.686V72a8,8,0,0,1,16,0v60.686l20.28418-20.28467a8.00035,8.00035,0,0,1,11.314,11.31445l-33.94091,33.94141c-.0542.0542-.11426.10107-.16944.15332-.1333.126-.26611.25244-.4082.36914-.06689.05517-.13867.10254-.207.15527-.13916.10693-.27686.21484-.42285.313-.05616.0376-.11621.06885-.17334.105-.16358.104-.32813.207-.49951.29883-.04248.023-.08692.041-.12989.0625-.18945.09765-.38135.1914-.57959.27392-.02832.01221-.05859.02051-.0874.03223-.2124.08545-.42725.16455-.64844.23193-.02929.00928-.05957.01465-.08886.02295-.21973.064-.44141.12256-.668.168-.06543.01319-.13282.01856-.19873.03028-.19092.0332-.38184.06689-.57715.08593a7.89257,7.89257,0,0,1-1.59766,0c-.19531-.019-.38623-.05273-.57715-.08593-.06591-.01172-.1333-.01709-.19873-.03028-.22656-.04541-.44824-.104-.668-.168-.02929-.0083-.05957-.01367-.08886-.02295-.22168-.06738-.438-.14746-.65088-.23291-.02783-.01123-.05713-.01953-.085-.03125-.19824-.08252-.39014-.17627-.58008-.27392-.04248-.022-.08692-.03955-.1294-.0625-.17138-.0918-.33593-.19483-.49951-.29883-.05713-.03613-.11718-.06738-.17334-.105-.146-.09815-.28369-.20606-.42285-.313-.06836-.05273-.14014-.1001-.207-.15527-.13818-.11328-.26709-.23731-.39746-.35938-.05908-.05566-.12256-.10547-.18018-.16308L88.40186,123.71582A8.00076,8.00076,0,0,1,88.40234,112.40137ZM208,208H48V168l28.68066-.001,19.31446,19.31641A15.89834,15.89834,0,0,0,107.30762,192h41.373a15.89606,15.89606,0,0,0,11.31348-4.68652L179.30762,168h28.6997l.00245,40Z" />
    </Svg>
  );
}

export default ArchiveTray;
