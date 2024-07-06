import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    leadingImage: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Symbol;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
