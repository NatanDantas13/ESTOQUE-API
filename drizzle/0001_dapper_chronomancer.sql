CREATE TABLE `company` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `company_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `companies`;