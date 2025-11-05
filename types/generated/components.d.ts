import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'link.link', false>;
    specialContent: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventNextEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_next_events';
  info: {
    displayName: 'nextEvent';
  };
  attributes: {
    event: Schema.Attribute.Relation<'oneToOne', 'api::event.event'>;
    title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    icon: 'crown';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServiceService extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    services: Schema.Attribute.Component<'services.services', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'event.next-event': EventNextEvent;
      'hero.hero': HeroHero;
      'link.link': LinkLink;
      'service.service': ServiceService;
      'services.services': ServicesServices;
    }
  }
}
