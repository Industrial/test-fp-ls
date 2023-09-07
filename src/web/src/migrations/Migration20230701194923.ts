import { Migration } from '@mikro-orm/migrations'

export class Migration20230701194923 extends Migration {
  public async up(): Promise<void> {
    this.addSql(
      'create table `custom_base_entity` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null);',
    )

    this.addSql(
      'create table `list` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `sort` integer not null, `label` text not null);',
    )

    this.addSql(
      'create table `project` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `sort` integer not null, `label` text not null);',
    )

    this.addSql(
      'create table `item` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `sort` integer not null, `label` text not null, `list_id` integer not null, `project_id` integer null, constraint `item_list_id_foreign` foreign key(`list_id`) references `list`(`id`) on update cascade, constraint `item_project_id_foreign` foreign key(`project_id`) references `project`(`id`) on delete set null on update cascade);',
    )
    this.addSql('create index `item_list_id_index` on `item` (`list_id`);')
    this.addSql('create index `item_project_id_index` on `item` (`project_id`);')

    this.addSql(
      'create table `tag` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `sort` integer not null, `label` text not null);',
    )

    this.addSql(
      'create table `item_tags` (`item_id` integer not null, `tag_id` integer not null, constraint `item_tags_item_id_foreign` foreign key(`item_id`) references `item`(`id`) on delete cascade on update cascade, constraint `item_tags_tag_id_foreign` foreign key(`tag_id`) references `tag`(`id`) on delete cascade on update cascade, primary key (`item_id`, `tag_id`));',
    )
    this.addSql('create index `item_tags_item_id_index` on `item_tags` (`item_id`);')
    this.addSql('create index `item_tags_tag_id_index` on `item_tags` (`tag_id`);')
  }
}
