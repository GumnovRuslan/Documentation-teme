interface IPropsDefaultIcon {
  size?: number | string
  color?: string
}

export const DotesIcon = ({size, color}: IPropsDefaultIcon) => {
  return (
    <svg width={size || 17} height={size || 17} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.66675" cy="7.66667" r="1" fill={color || "black"} />
      <circle cx="8.3335" cy="7.66667" r="1" fill={color || "black"} />
      <circle cx="13" cy="7.66667" r="1" fill={color || "black"} />
    </svg>
  )
}

export const LogoIcon = () => {
  return (
    <svg viewBox="0 0 96 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M67.2299 13.0625C63.8875 12.1018 60.3668 11.5885 56.7308 11.5885C56.0866 11.5885 55.446 11.6046 54.8094 11.6365C55.4459 11.6046 56.0864 11.5886 56.7304 11.5886C60.3662 11.5886 63.8869 12.1018 67.2291 13.0624C67.2294 13.0624 67.2296 13.0624 67.2299 13.0625ZM88.3396 22.7735C80.5395 13.8077 69.2671 8.17553 56.7308 8.17553C33.1873 8.17553 14.1016 28.04 14.1016 52.5441C14.1016 77.0482 33.1873 96.9127 56.7308 96.9127C60.9106 96.9127 64.9499 96.2866 68.7669 95.1196C62.4917 98.248 55.4624 100 48.0399 100C21.5082 100 0 77.6142 0 50C0 22.3858 21.5082 0 48.0399 0C64.9233 0 79.7725 9.06489 88.3396 22.7735ZM89.7192 74.8802L89.7217 74.8758C86.4525 80.0968 82.0703 84.4939 76.9253 87.7022C82.069 84.4948 86.4503 80.0994 89.7192 74.8802Z"
        fill="#7DBE3B"
      />
      <path
        d="M95.0017 62.1086C90.863 80.1143 75.2986 93.4999 56.7304 93.4999C34.998 93.4999 17.3804 75.1635 17.3804 52.5443C17.3804 29.9251 34.998 11.5887 56.7304 11.5887C60.3665 11.5887 63.8873 12.1019 67.2297 13.0627C66.4157 13.0006 65.5935 12.9691 64.7643 12.9691C46.3823 12.9691 31.4807 28.4787 31.4807 47.6107C31.4807 66.7428 46.3823 82.2524 64.7643 82.2524C78.173 82.2524 89.7298 73.9998 95.0017 62.1086ZM76.443 76.3855C87.2123 71.6448 94.7687 60.5462 94.7687 47.6107C94.7687 30.3636 81.3353 16.3821 64.7643 16.3821C60.6214 16.3821 56.6747 17.256 53.0849 18.8363C56.6746 17.2561 60.6212 16.3822 64.764 16.3822C81.3349 16.3822 94.7684 30.3638 94.7684 47.6109C94.7684 60.5462 87.2121 71.6447 76.443 76.3855Z"
        fill="#448C0D"
      />
    </svg>
  )
}

export const TrashIcon = ({size}: IPropsDefaultIcon) => {
  return (
    <svg
      width={size || 16}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 4.5H12.5001C12.5001 4.22386 12.2762 4 12.0001 4V4.5ZM4.00008 4.5V4C3.72394 4 3.50008 4.22386 3.50008 4.5H4.00008ZM4.72795 14.3547L4.95494 13.9092L4.72795 14.3547ZM4.14541 13.772L3.6999 13.999L4.14541 13.772ZM11.8549 13.772L11.4094 13.545L11.8549 13.772ZM11.2719 14.3547L11.0449 13.9092L11.2719 14.3547ZM2.66675 4C2.39061 4 2.16675 4.22386 2.16675 4.5C2.16675 4.77614 2.39061 5 2.66675 5V4ZM13.3334 5C13.6096 5 13.8334 4.77614 13.8334 4.5C13.8334 4.22386 13.6096 4 13.3334 4V5ZM10.6667 4.5V5C10.9429 5 11.1667 4.77614 11.1667 4.5H10.6667ZM5.33341 4.5H4.83341C4.83341 4.77614 5.05727 5 5.33341 5V4.5ZM10.5652 3.32308L11.0271 3.13174L10.5652 3.32308ZM9.84366 2.60149L10.035 2.13955V2.13955L9.84366 2.60149ZM11.5001 4.5V12.3667H12.5001V4.5H11.5001ZM9.86688 14H6.13354V15H9.86688V14ZM4.50008 12.3667V4.5H3.50008V12.3667H4.50008ZM4.00008 5H12.0001V4H4.00008V5ZM6.13354 14C5.75194 14 5.49572 13.9996 5.29839 13.9835C5.10687 13.9678 5.01529 13.9399 4.95494 13.9092L4.50095 14.8002C4.72581 14.9147 4.96367 14.9595 5.21696 14.9802C5.46445 15.0004 5.76842 15 6.13354 15V14ZM3.50008 12.3667C3.50008 12.7318 3.49969 13.0357 3.51991 13.2831C3.5406 13.5364 3.58534 13.7742 3.6999 13.999L4.59091 13.545C4.56015 13.4847 4.53223 13.3931 4.51659 13.2017C4.50047 13.0044 4.50008 12.7483 4.50008 12.3667H3.50008ZM4.95494 13.9092C4.79822 13.8293 4.67084 13.7019 4.59091 13.545L3.6999 13.999C3.87563 14.3439 4.15591 14.6244 4.50095 14.8002L4.95494 13.9092ZM11.5001 12.3667C11.5001 12.7483 11.4997 13.0045 11.4836 13.2018C11.468 13.3932 11.4401 13.4847 11.4094 13.545L12.3004 13.999C12.415 13.7741 12.4597 13.5363 12.4803 13.283C12.5005 13.0357 12.5001 12.7317 12.5001 12.3667H11.5001ZM9.86688 15C10.232 15 10.5359 15.0004 10.7832 14.9802C11.0365 14.9595 11.2741 14.9147 11.4989 14.8002L11.0449 13.9092C10.9845 13.9399 10.893 13.9678 10.7017 13.9835C10.5046 13.9996 10.2485 14 9.86688 14V15ZM11.4094 13.545C11.3296 13.7016 11.202 13.8291 11.0449 13.9092L11.4989 14.8002C11.8436 14.6245 12.1245 14.3442 12.3004 13.999L11.4094 13.545ZM2.66675 5H13.3334V4H2.66675V5ZM10.6667 4H5.33341V5H10.6667V4ZM7.33342 3H8.66675V2H7.33342V3ZM5.83341 4.5C5.83341 4.18253 5.83369 3.96947 5.84494 3.80449C5.85589 3.644 5.87554 3.56586 5.89685 3.51442L4.97297 3.13174C4.89278 3.32533 4.86168 3.52502 4.84726 3.73642C4.83314 3.94333 4.83341 4.19621 4.83341 4.5H5.83341ZM7.33342 2C7.02963 2 6.77671 1.99973 6.56976 2.01385C6.35834 2.02827 6.1586 2.05936 5.96499 2.13955L6.34767 3.06343C6.39909 3.04214 6.47726 3.02248 6.63782 3.01153C6.80284 3.00027 7.01595 3 7.33342 3V2ZM5.89685 3.51442C5.98147 3.31012 6.14359 3.14797 6.34767 3.06343L5.96499 2.13955C5.51566 2.32567 5.159 2.68263 4.97297 3.13174L5.89685 3.51442ZM11.1667 4.5C11.1667 4.19618 11.167 3.9433 11.1529 3.73637C11.1384 3.52496 11.1073 3.3253 11.0271 3.13174L10.1032 3.51442C10.1246 3.56589 10.1442 3.64406 10.1552 3.80454C10.1665 3.9695 10.1667 4.18256 10.1667 4.5H11.1667ZM8.66675 3C8.98422 3 9.19728 3.00027 9.36225 3.01153C9.52274 3.02248 9.60088 3.04213 9.65232 3.06343L10.035 2.13955C9.84141 2.05937 9.64173 2.02827 9.43033 2.01385C9.22342 1.99973 8.97053 2 8.66675 2V3ZM11.0271 3.13174C10.8411 2.68256 10.4843 2.32564 10.035 2.13955L9.65232 3.06343C9.85647 3.148 10.0187 3.31019 10.1032 3.51442L11.0271 3.13174Z"
        fill="black"
      />
      <path d="M7 7.5L7 11.5" stroke="black" />
      <path d="M9 7.5L9 11.5" stroke="black" />
    </svg>
  )
}

export const PlusIcon = ({size, color}: IPropsDefaultIcon) => {
  return (
    <svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 12H4" stroke={color || "black"} />
      <path d="M12 4V20" stroke={color || "black"} />
    </svg>
  )
}

export const SearchIcon = ({size}: IPropsDefaultIcon) => {
  return (
    <svg
      width={size || 14}
      height={size || 14}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.33229" cy="7.19252" r="5.35902" stroke="black" />
      <path d="M10.9915 11.1389L14.0271 14.1667" stroke="black" />
    </svg>
  )
}

export const UserIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 13.3335C14 12.1724 12.8869 11.1846 11.3333 10.8185M10 13.3335C10 11.8607 8.20914 10.6668 6 10.6668C3.79086 10.6668 2 11.8607 2 13.3335M10 8.66683C11.4728 8.66683 12.6667 7.47292 12.6667 6.00016C12.6667 4.5274 11.4728 3.3335 10 3.3335M6 8.66683C4.52724 8.66683 3.33333 7.47292 3.33333 6.00016C3.33333 4.5274 4.52724 3.3335 6 3.3335C7.47276 3.3335 8.66667 4.5274 8.66667 6.00016C8.66667 7.47292 7.47276 8.66683 6 8.66683Z"
        stroke="black"
      />
    </svg>
  )
}

export const RenameIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0266 3.20711C10.4172 2.81658 11.0503 2.81658 11.4409 3.20711L13.2929 5.05915C13.6834 5.44967 13.6834 6.08284 13.2929 6.47336L5.55954 14.2067C5.37177 14.3945 5.11704 14.4999 4.85149 14.4996L3.00119 14.4979C2.44964 14.4974 2.00265 14.0504 2.00213 13.4988L2.00039 11.6485C2.00014 11.383 2.10552 11.1282 2.29328 10.9405L10.0266 3.20711Z"
        stroke="black"
        strokeLinecap="square"
      />
      <path d="M13.3334 14.5H2.66675" stroke="black" strokeLinecap="round" />
    </svg>
  )
}

export const DublicateIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5.33325" y="5.16667" width="8" height="9.33333" stroke="black" />
      <path
        d="M2.66675 11.8333C2.66675 11.8333 2.66675 3.16668 2.66675 2.50001H10.6667"
        stroke="black"
      />
    </svg>
  )
}

export const CopyIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.76093 10.0322C5.56567 10.2274 5.56567 10.544 5.76093 10.7393C5.95619 10.9346 6.27277 10.9346 6.46804 10.7393L5.76093 10.0322ZM10.2393 6.96806C10.4345 6.77279 10.4345 6.45621 10.2393 6.26095C10.044 6.06569 9.72743 6.06569 9.53217 6.26095L10.2393 6.96806ZM5.05407 8.3822C5.24934 8.18694 5.24934 7.87036 5.05407 7.67509C4.85881 7.47983 4.54223 7.47983 4.34697 7.67509L5.05407 8.3822ZM3.75771 8.97146L4.11127 9.32501L3.75771 8.97146ZM7.52895 12.7427L7.8825 13.0962L7.88257 13.0962L7.52895 12.7427ZM8.82498 12.1534C9.0202 11.9581 9.02014 11.6415 8.82484 11.4463C8.62953 11.251 8.31295 11.2511 8.11773 11.4464L8.82498 12.1534ZM7.17499 4.84658C6.97973 5.04184 6.97973 5.35842 7.17499 5.55369C7.37025 5.74895 7.68684 5.74895 7.8821 5.55369L7.17499 4.84658ZM8.47135 4.25732L8.82491 4.61088L8.47135 4.25732ZM12.2427 8.02856L11.8892 7.67501L11.8892 7.67503L12.2427 8.02856ZM10.9465 8.61784C10.7512 8.81311 10.7512 9.1297 10.9465 9.32495C11.1418 9.5202 11.4584 9.52018 11.6536 9.32491L10.9465 8.61784ZM6.46804 10.7393L10.2393 6.96806L9.53217 6.26095L5.76093 10.0322L6.46804 10.7393ZM4.34697 7.67509L3.40416 8.6179L4.11127 9.32501L5.05407 8.3822L4.34697 7.67509ZM3.40416 8.6179C2.16755 9.85451 2.16725 11.8595 3.40396 13.0962L4.11106 12.3891C3.26498 11.543 3.26508 10.1712 4.11127 9.32501L3.40416 8.6179ZM3.40396 13.0962C4.64062 14.3329 6.64584 14.3329 7.8825 13.0962L7.17539 12.3891C6.32926 13.2353 4.9572 13.2353 4.11106 12.3891L3.40396 13.0962ZM7.88257 13.0962L8.82498 12.1534L8.11773 11.4464L7.17532 12.3892L7.88257 13.0962ZM7.8821 5.55369L8.82491 4.61088L8.1178 3.90377L7.17499 4.84658L7.8821 5.55369ZM8.82491 4.61088C9.67103 3.76475 11.0428 3.76477 11.8889 4.61092L12.596 3.90381C11.3594 2.66716 9.35447 2.6671 8.1178 3.90377L8.82491 4.61088ZM11.8889 4.61092C12.7351 5.45712 12.7353 6.82893 11.8892 7.67501L12.5963 8.38211C13.833 7.14539 13.8326 5.14041 12.596 3.90381L11.8889 4.61092ZM11.8892 7.67503L10.9465 8.61784L11.6536 9.32491L12.5963 8.38209L11.8892 7.67503Z"
        fill="black"
      />
    </svg>
  )
} 

export const DeleteIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 4.5H12.5001C12.5001 4.22386 12.2762 4 12.0001 4V4.5ZM4.00008 4.5V4C3.72394 4 3.50008 4.22386 3.50008 4.5H4.00008ZM4.72795 14.3547L4.95494 13.9092L4.72795 14.3547ZM4.14541 13.772L3.6999 13.999L4.14541 13.772ZM11.8549 13.772L11.4094 13.545L11.8549 13.772ZM11.2719 14.3547L11.0449 13.9092L11.2719 14.3547ZM2.66675 4C2.39061 4 2.16675 4.22386 2.16675 4.5C2.16675 4.77614 2.39061 5 2.66675 5V4ZM13.3334 5C13.6096 5 13.8334 4.77614 13.8334 4.5C13.8334 4.22386 13.6096 4 13.3334 4V5ZM10.6667 4.5V5C10.9429 5 11.1667 4.77614 11.1667 4.5H10.6667ZM5.33341 4.5H4.83341C4.83341 4.77614 5.05727 5 5.33341 5V4.5ZM10.5652 3.32308L11.0271 3.13174L10.5652 3.32308ZM9.84366 2.60149L10.035 2.13955V2.13955L9.84366 2.60149ZM11.5001 4.5V12.3667H12.5001V4.5H11.5001ZM9.86688 14H6.13354V15H9.86688V14ZM4.50008 12.3667V4.5H3.50008V12.3667H4.50008ZM4.00008 5H12.0001V4H4.00008V5ZM6.13354 14C5.75194 14 5.49572 13.9996 5.29839 13.9835C5.10687 13.9678 5.01529 13.9399 4.95494 13.9092L4.50095 14.8002C4.72581 14.9147 4.96367 14.9595 5.21696 14.9802C5.46445 15.0004 5.76842 15 6.13354 15V14ZM3.50008 12.3667C3.50008 12.7318 3.49969 13.0357 3.51991 13.2831C3.5406 13.5364 3.58534 13.7742 3.6999 13.999L4.59091 13.545C4.56015 13.4847 4.53223 13.3931 4.51659 13.2017C4.50047 13.0044 4.50008 12.7483 4.50008 12.3667H3.50008ZM4.95494 13.9092C4.79822 13.8293 4.67084 13.7019 4.59091 13.545L3.6999 13.999C3.87563 14.3439 4.15591 14.6244 4.50095 14.8002L4.95494 13.9092ZM11.5001 12.3667C11.5001 12.7483 11.4997 13.0045 11.4836 13.2018C11.468 13.3932 11.4401 13.4847 11.4094 13.545L12.3004 13.999C12.415 13.7741 12.4597 13.5363 12.4803 13.283C12.5005 13.0357 12.5001 12.7317 12.5001 12.3667H11.5001ZM9.86688 15C10.232 15 10.5359 15.0004 10.7832 14.9802C11.0365 14.9595 11.2741 14.9147 11.4989 14.8002L11.0449 13.9092C10.9845 13.9399 10.893 13.9678 10.7017 13.9835C10.5046 13.9996 10.2485 14 9.86688 14V15ZM11.4094 13.545C11.3296 13.7016 11.202 13.8291 11.0449 13.9092L11.4989 14.8002C11.8436 14.6245 12.1245 14.3442 12.3004 13.999L11.4094 13.545ZM2.66675 5H13.3334V4H2.66675V5ZM10.6667 4H5.33341V5H10.6667V4ZM7.33342 3H8.66675V2H7.33342V3ZM5.83341 4.5C5.83341 4.18253 5.83369 3.96947 5.84494 3.80449C5.85589 3.644 5.87554 3.56586 5.89685 3.51442L4.97297 3.13174C4.89278 3.32533 4.86168 3.52502 4.84726 3.73642C4.83314 3.94333 4.83341 4.19621 4.83341 4.5H5.83341ZM7.33342 2C7.02963 2 6.77671 1.99973 6.56976 2.01385C6.35834 2.02827 6.1586 2.05936 5.96499 2.13955L6.34767 3.06343C6.39909 3.04214 6.47726 3.02248 6.63782 3.01153C6.80284 3.00027 7.01595 3 7.33342 3V2ZM5.89685 3.51442C5.98147 3.31012 6.14359 3.14797 6.34767 3.06343L5.96499 2.13955C5.51566 2.32567 5.159 2.68263 4.97297 3.13174L5.89685 3.51442ZM11.1667 4.5C11.1667 4.19618 11.167 3.9433 11.1529 3.73637C11.1384 3.52496 11.1073 3.3253 11.0271 3.13174L10.1032 3.51442C10.1246 3.56589 10.1442 3.64406 10.1552 3.80454C10.1665 3.9695 10.1667 4.18256 10.1667 4.5H11.1667ZM8.66675 3C8.98422 3 9.19728 3.00027 9.36225 3.01153C9.52274 3.02248 9.60088 3.04213 9.65232 3.06343L10.035 2.13955C9.84141 2.05937 9.64173 2.02827 9.43033 2.01385C9.22342 1.99973 8.97053 2 8.66675 2V3ZM11.0271 3.13174C10.8411 2.68256 10.4843 2.32564 10.035 2.13955L9.65232 3.06343C9.85647 3.148 10.0187 3.31019 10.1032 3.51442L11.0271 3.13174Z"
        fill="black"
      />
      <path d="M7 7.5L7 11.5" stroke="black" />
      <path d="M9 7.5L9 11.5" stroke="black" />
    </svg>
  )
}

export const BackArrowIcon = ({size}: IPropsDefaultIcon) => {
  return (
    <svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.31311 9.02023C4.50838 9.21549 4.82496 9.21549 5.02022 9.02023C5.21548 8.82497 5.21548 8.50839 5.02022 8.31312L4.31311 9.02023ZM2 6.00001L1.64645 5.64646C1.55268 5.74022 1.5 5.8674 1.5 6.00001C1.5 6.13262 1.55268 6.2598 1.64645 6.35356L2 6.00001ZM5.02022 3.6869C5.21548 3.49163 5.21548 3.17505 5.02022 2.97979C4.82496 2.78453 4.50838 2.78453 4.31311 2.97979L5.02022 3.6869ZM7.33333 12.1667C7.05719 12.1667 6.83333 12.3905 6.83333 12.6667C6.83333 12.9428 7.05719 13.1667 7.33333 13.1667V12.1667ZM5.02022 8.31312L2.35355 5.64646L1.64645 6.35356L4.31311 9.02023L5.02022 8.31312ZM2.35355 6.35356L5.02022 3.6869L4.31311 2.97979L1.64645 5.64646L2.35355 6.35356ZM7.33333 13.1667H10.6667V12.1667H7.33333V13.1667ZM10.6667 13.1667C12.7838 13.1667 14.5 11.4504 14.5 9.33334H13.5C13.5 10.8981 12.2315 12.1667 10.6667 12.1667V13.1667ZM14.5 9.33334C14.5 7.21625 12.7838 5.50001 10.6667 5.50001V6.50001C12.2315 6.50001 13.5 7.76854 13.5 9.33334H14.5ZM10.6667 5.50001H2V6.50001H10.6667V5.50001Z"
        fill="#696969"
      />
    </svg>
  )
}

export const CrossIcon = ({size}: IPropsDefaultIcon) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 18L6 6M18 6L6 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowLeftIcon = ({size}: IPropsDefaultIcon) => {
  return (
    <svg
      width={size || 10}
      // height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.79175 1.58334L8.20841 8.00001L1.79175 14.4167" stroke="black" />
    </svg>
  )
}