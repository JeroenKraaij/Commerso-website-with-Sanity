
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            // Site Settings als singleton
            S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),

            // Alle andere document types
            ...S.documentTypeListItems().filter(
                (item) => item.getId() !== 'siteSettings'
            ),
        ])