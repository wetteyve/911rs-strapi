import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaDataSeoSettings extends Schema.Component {
  collectionName: 'components_meta_data_seo_settings';
  info: {
    displayName: 'seo_settings';
    icon: 'earth';
    description: '';
  };
  attributes: {
    allow_indexing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 60;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 160;
      }>;
    keywords: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface PageBuildingBlocksBeitrag extends Schema.Component {
  collectionName: 'components_page_building_blocks_beitrags';
  info: {
    displayName: 'beitrag';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    external_link: Attribute.String;
    lead_picture: Attribute.Media & Attribute.Required;
  };
}

export interface PageBuildingBlocksBildstrecken extends Schema.Component {
  collectionName: 'components_page_building_blocks_bildstreckens';
  info: {
    displayName: 'bildstrecken';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'neue Bildstrecke'>;
    bilder: Attribute.Media & Attribute.Required;
  };
}

export interface PageBuildingBlocksLead extends Schema.Component {
  collectionName: 'components_page_building_blocks_leads';
  info: {
    displayName: 'lead';
    icon: 'feather';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lead Titel'>;
    description: Attribute.RichText;
  };
}

export interface PagesAboutPage extends Schema.Component {
  collectionName: 'components_pages_about_pages';
  info: {
    displayName: 'about_page';
    icon: 'link';
    description: '';
  };
  attributes: {
    header_picture: Attribute.Media & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
    lead_picture: Attribute.Media & Attribute.Required;
    impressionen: Attribute.Media & Attribute.Required;
  };
}

export interface PagesHomePage extends Schema.Component {
  collectionName: 'components_pages_home_pages';
  info: {
    displayName: 'home_page';
    icon: 'link';
    description: '';
  };
  attributes: {
    header_picture: Attribute.Media & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
    lead_picture: Attribute.Media & Attribute.Required;
    beitrag_lead: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
    beitrag_collection: Attribute.Component<
      'page-building-blocks.beitrag',
      true
    > &
      Attribute.Required;
    impressionen: Attribute.Media & Attribute.Required;
  };
}

export interface PagesLeistungenPage extends Schema.Component {
  collectionName: 'components_pages_leistungen_pages';
  info: {
    displayName: 'leistungen_page';
    icon: 'link';
    description: '';
  };
  attributes: {
    header_picture: Attribute.Media & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
    bildstrecken_lead: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
    bildstrecken_collection: Attribute.Component<
      'page-building-blocks.bildstrecken',
      true
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta-data.seo-settings': MetaDataSeoSettings;
      'page-building-blocks.beitrag': PageBuildingBlocksBeitrag;
      'page-building-blocks.bildstrecken': PageBuildingBlocksBildstrecken;
      'page-building-blocks.lead': PageBuildingBlocksLead;
      'pages.about-page': PagesAboutPage;
      'pages.home-page': PagesHomePage;
      'pages.leistungen-page': PagesLeistungenPage;
    }
  }
}
