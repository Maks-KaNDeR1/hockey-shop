import React from 'react'
import { AboutCompany } from './AboutCompany/AboutCompany'
import { DiscountBlock } from './DiscountBlock/DiscountBlock'
import { TestBlock } from './TestBlock/TestBlock'

export const Complementary = () => {
    return <>
        <TestBlock />
        <AboutCompany />
        <DiscountBlock />
    </>
}
