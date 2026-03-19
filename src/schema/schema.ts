import { pgTable, serial, text, varchar, uniqueIndex, pgEnum, uuid, boolean, integer, date, timestamp } from "drizzle-orm/pg-core";

export const userRole = pgEnum("userRole", ['Admin', 'User'])

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: varchar('password', {length: 255}).notNull(),
  role : userRole("userRole").default("User").notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull()
}, table => {
  return {
    emailIndex: uniqueIndex("emailIndex").on(table.email)
  }
});

export const otp = pgTable('otp', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('userId').references(() => users.id).notNull(),

  hashedOtp: varchar('hashedOtp').notNull().unique(),
  temporaryBlock: boolean('temporaryBlock').default(false),
  emailAttempts: integer('emailAttempts').notNull().default(1),
  otpExpiry: date('otpExpiry'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull()
})
