import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <section className='container footer'>
      <h1>Get In Touch</h1>
      <div className='topFooter'>
        <div className='footerDetails'>
          <Link href='https://www.apptension.com/'>
            <Image src='envelope.svg' width={23} height={23} alt='envelope' />
            <p>contact@apptension.com</p>
          </Link>
          <Link href='https://www.apptension.com/'>
            <Image src='images/phone.svg' width={23} height={23} alt='phone' />
            <p>+48 793 925 552</p>
          </Link>
        </div>
        <div className='location'>
          <Image src='images/usa.svg' width={383} height={237} alt='usa' />
          <div className='footer-address-us'>
            <h4 className='footer-address-us-head'>Austin</h4>
            <div className='footer-address-us-text'>
              2025 Guadalupe Street Suite 260, Austin, TX 78705 United States
            </div>
          </div>
        </div>
        <div className='location'>
          <Image src='images/uk.svg' width={383} height={237} alt='uk' />
          <div className='footer-address-us'>
            <h4 className='footer-address-us-head'>Austin</h4>
            <div className='footer-address-us-text'>
              2025 Guadalupe Street Suite 260, Austin, TX 78705 United States
            </div>
          </div>
        </div>
        <div className='location'>
          <Image src='images/pl.svg' width={383} height={237} alt='pl' />
          <div className='footer-address-us'>
            <h4 className='footer-address-us-head'>Austin</h4>
            <div className='footer-address-us-text'>
              2025 Guadalupe Street Suite 260, Austin, TX 78705 United States
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
