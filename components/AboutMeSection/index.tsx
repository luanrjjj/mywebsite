/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import { AboutMeContent, Section, Text } from './styles'
import Image from 'next/image'

const AboutMeSection = () => {
  return (
    <>
      <Section>
        <div className="SectionContent">
          <h2 className="numberedSection">Sobre mim</h2>

          <AboutMeContent>
            <Text>
              <p>
                Lorem ipsum fermentum taciti aliquam
                elementum hac malesuada nullam quis in
                porttitor, lorem facilisis commodo
                suspendisse felis aliquam venenatis hac
                imperdiet tristique sem, sit vitae curabitur
                elit cras massa sem lectus quis curabitur.
                <p>
                  Est libero platea curae duis hendrerit per
                  ut dapibus per, class auctor cursus tempus
                  gravida lectus habitasse neque massa,
                  vestibulum proin velit tempor volutpat
                  amet sagittis mauris. iaculis torquent
                  etiam quis primis mattis curabitur,
                  fermentum ut auctor fusce aptent, mollis
                  elementum luctus cubilia iaculis.
                  ultricies vestibulum nisi sagittis iaculis
                  morbi suscipit praesent ut, nullam quisque
                  morbi aenean maecenas vulputate pharetra,
                  iaculis ad aliquam habitasse ornare netus
                  placerat.{' '}
                </p>
              </p>
            </Text>
            <div className="Picture">
              <div className="ImageBox">
                <div className="ImageFace">
                  <Image
                    src="/MyFace.jpeg"
                    width={150}
                    height={200}
                    className="imgFace"
                  ></Image>
                </div>
              </div>
            </div>
          </AboutMeContent>
        </div>
      </Section>
    </>
  )
}

export default AboutMeSection
