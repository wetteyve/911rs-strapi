import type { Attribute, Schema } from '@strapi/strapi';

export interface MetaDataSeoSettings extends Schema.Component {
  collectionName: 'components_meta_data_seo_settings';
  info: {
    description: '';
    displayName: 'seo_settings';
    icon: 'earth';
  };
  attributes: {
    allow_indexing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 2;
      }>;
    keywords: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    previewImage: Attribute.Media<'images'>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 2;
      }>;
  };
}

export interface PageBuildingBlocksBaugruppe extends Schema.Component {
  collectionName: 'components_page_building_blocks_baugruppes';
  info: {
    description: '';
    displayName: 'Info_block';
    icon: 'cog';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    picture: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
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
    external_link: Attribute.String;
    lead_picture: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageBuildingBlocksEvent extends Schema.Component {
  collectionName: 'components_page_building_blocks_events';
  info: {
    displayName: 'event';
    icon: 'calendar';
  };
  attributes: {
    end: Attribute.Date;
    important: Attribute.String;
    lead: Attribute.String & Attribute.Required;
    link: Attribute.String;
    start: Attribute.Date & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageBuildingBlocksLead extends Schema.Component {
  collectionName: 'components_page_building_blocks_leads';
  info: {
    displayName: 'lead';
    icon: 'feather';
  };
  attributes: {
    description: Attribute.RichText;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lead Titel'>;
  };
}

export interface PagesAboutPage extends Schema.Component {
  collectionName: 'components_pages_about_pages';
  info: {
    description: '';
    displayName: 'about_page';
    icon: 'link';
  };
  attributes: {
    about: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
    car: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
  };
}

export interface PagesAgendaPage extends Schema.Component {
  collectionName: 'components_pages_agenda_pages';
  info: {
    description: '';
    displayName: 'agenda_page';
    icon: 'link';
  };
  attributes: {
    events: Attribute.Component<'page-building-blocks.event', true>;
    lead: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PagesDatenschutzPage extends Schema.Component {
  collectionName: 'components_pages_datenschutz_pages';
  info: {
    displayName: 'datenschutz_page';
    icon: 'link';
  };
  attributes: {
    datenschutz: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
  };
}

export interface PagesHomePage extends Schema.Component {
  collectionName: 'components_pages_home_pages';
  info: {
    description: '';
    displayName: 'home_page';
    icon: 'link';
  };
  attributes: {
    beitrag_collection: Attribute.Component<
      'page-building-blocks.beitrag',
      true
    > &
      Attribute.Required;
    beitrag_lead: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
    header_picture: Attribute.Media<'images'> & Attribute.Required;
    impressionen: Attribute.Media<'images', true> & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
  };
}

export interface PagesImpressumPage extends Schema.Component {
  collectionName: 'components_pages_impressum_pages';
  info: {
    displayName: 'impressum_page';
    icon: 'link';
  };
  attributes: {
    impressum: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
  };
}

export interface PagesKontaktPage extends Schema.Component {
  collectionName: 'components_pages_kontakt_pages';
  info: {
    displayName: 'kontakt_page';
    icon: 'link';
  };
  attributes: {
    address: Attribute.RichText & Attribute.Required;
    lead: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PagesLeistungenPage extends Schema.Component {
  collectionName: 'components_pages_leistungen_pages';
  info: {
    description: '';
    displayName: 'leistungen_page';
    icon: 'link';
  };
  attributes: {
    baugruppen: Attribute.Component<'page-building-blocks.baugruppe', true> &
      Attribute.Required;
    baugruppen_lead: Attribute.Component<'page-building-blocks.lead'> &
      Attribute.Required;
    header_picture: Attribute.Media<'images'> & Attribute.Required;
    lead: Attribute.Component<'page-building-blocks.lead'> & Attribute.Required;
  };
}

export interface PagesLinksPage extends Schema.Component {
  collectionName: 'components_pages_links_pages';
  info: {
    description: '';
    displayName: 'links_page';
    icon: 'link';
  };
  attributes: {
    links: Attribute.Component<'page-building-blocks.baugruppe'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta-data.seo-settings': MetaDataSeoSettings;
      'page-building-blocks.baugruppe': PageBuildingBlocksBaugruppe;
      'page-building-blocks.beitrag': PageBuildingBlocksBeitrag;
      'page-building-blocks.event': PageBuildingBlocksEvent;
      'page-building-blocks.lead': PageBuildingBlocksLead;
      'pages.about-page': PagesAboutPage;
      'pages.agenda-page': PagesAgendaPage;
      'pages.datenschutz-page': PagesDatenschutzPage;
      'pages.home-page': PagesHomePage;
      'pages.impressum-page': PagesImpressumPage;
      'pages.kontakt-page': PagesKontaktPage;
      'pages.leistungen-page': PagesLeistungenPage;
      'pages.links-page': PagesLinksPage;
    }
  }
}
