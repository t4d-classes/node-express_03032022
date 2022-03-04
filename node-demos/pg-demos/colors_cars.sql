create table cars
(
	car_id serial not null,
	make varchar(255),
	model varchar(255),
	year smallint,
	color varchar(255),
	price real
);

create unique index cars_car_id_uindex
	on cars (car_id);

alter table cars
	add constraint cars_pk
		primary key (car_id);

insert into cars (make, model, year, color, price)
values('Ford','Fusion Hybrid', 2020, 'red', 45000);
insert into cars (make, model, year, color, price)
values('Tesla','S', 2019, 'blue', 120000);

create table colors
(
	color_id serial not null,
  color_name varchar(255),
  hexcode varchar(255)
);

create unique index colors_color_id_uindex
	on colors (color_id);

alter table colors
	add constraint colors_pk
		primary key (color_id);

insert into colors (color_name, hexcode) values('red', 'FF0000');
insert into colors (color_name, hexcode) values('green', '00FF00');
insert into colors (color_name, hexcode) values('blue', '0000FF');