import Image from "next/image";
import styled from "styled-components";

import MobileBurger from "./MobileBurger";

export default function MobileNavigation() {
  return (
    <MobileNavWrapper>
      <MobileNav>
        <Image
          src="/media/common/butterlogo.svg"
          alt="Butter logo"
          width={88}
          height={19}
        />
        <div>
          <MobileBurger />
        </div>
      </MobileNav>
    </MobileNavWrapper>
  );
}

const MobileNavWrapper = styled.div`
  padding: 15px 5px 0px 5px;
  position: fixed;
  width: 100%;
`;

const MobileNav = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 20px;
  box-shadow: 0 4px 8px 0 rgba(10, 11, 30, 0.06),
    0 8px 48px 0 rgba(10, 11, 30, 0.08);
  border-radius: 20px;
`;
