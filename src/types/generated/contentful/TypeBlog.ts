import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful"

export interface TypeBlogFields {
  leadingImage: EntryFieldTypes.AssetLink
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Symbol
  body: EntryFieldTypes.Text
  slug: EntryFieldTypes.Symbol
  publishedAt: EntryFieldTypes.Date
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeBlogSkeleton,
  Modifiers,
  Locales
>
export type TypeBlogWithoutLinkResolutionResponse = TypeBlog<"WITHOUT_LINK_RESOLUTION">
export type TypeBlogWithoutUnresolvableLinksResponse = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS">
export type TypeBlogWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<
  "WITH_ALL_LOCALES",
  Locales
>
export type TypeBlogWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<
  "WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES",
  Locales
>
export type TypeBlogWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> =
  TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>
