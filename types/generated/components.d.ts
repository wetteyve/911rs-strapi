import type { Schema, Attribute } from '@strapi/strapi';

export interface PagesLinksPage extends Schema.Component {
  collectionName: 'components_pages_links_pages';
  info: {
    displayName: 'links_page';
    icon: 'link';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
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
    header_picture: Attribute.Media<'images'> & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
    baugruppen_lead: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
    baugruppen: Attribute.Component<'page-building-blocks.baugruppe', true> &
      Attribute.Required;
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
    header_picture: Attribute.Media<'images'> & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
    beitrag_lead: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
    beitrag_collection: Attribute.Component<
      'page-building-blocks.beitrag',
      true
    > &
      Attribute.Required;
    impressionen: Attribute.Media<'images', true> & Attribute.Required;
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
    about: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
    car: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
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

export interface PageBuildingBlocksBeitrag extends Schema.Component {
  collectionName: 'components_page_building_blocks_beitrags';
  info: {
    displayName: 'beitrag';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    external_link: Attribute.String;
    lead_picture: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface PageBuildingBlocksBaugruppe extends Schema.Component {
  collectionName: 'components_page_building_blocks_baugruppes';
  info: {
    displayName: 'Info_block';
    icon: 'cog';
    description: '';
  };
  attributes: {
    picture: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

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
    previewImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pages.links-page': PagesLinksPage;
      'pages.leistungen-page': PagesLeistungenPage;
      'pages.home-page': PagesHomePage;
      'pages.about-page': PagesAboutPage;
      'page-building-blocks.lead': PageBuildingBlocksLead;
      'page-building-blocks.beitrag': PageBuildingBlocksBeitrag;
      'page-building-blocks.baugruppe': PageBuildingBlocksBaugruppe;
      'meta-data.seo-settings': MetaDataSeoSettings;
    }
  }
}
