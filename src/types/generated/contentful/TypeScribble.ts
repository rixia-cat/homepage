import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeScribbleFields {
  title: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.Text;
}

export type TypeScribbleSkeleton = EntrySkeletonType<TypeScribbleFields, "scribble">;
export type TypeScribble<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeScribbleSkeleton,
  Modifiers,
  Locales
>;
export type TypeScribbleWithoutLinkResolutionResponse = TypeScribble<"WITHOUT_LINK_RESOLUTION">;
export type TypeScribbleWithoutUnresolvableLinksResponse = TypeScribble<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeScribbleWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeScribble<
  "WITH_ALL_LOCALES",
  Locales
>;
export type TypeScribbleWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> =
  TypeScribble<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeScribbleWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> =
  TypeScribble<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
