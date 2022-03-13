import React from 'react'
export type Unarray<T> = T extends Array<infer U> ? U: T
// export interface ImageProps {
//     logo: string,
//     layout?: "fill" | "fixed" | "intrinsic" | "responsive"   
// }