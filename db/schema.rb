# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131212201719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: true do |t|
    t.text     "artist_name"
    t.text     "genre"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "artists_events", id: false, force: true do |t|
    t.integer "artist_id", null: false
    t.integer "event_id",  null: false
  end

  add_index "artists_events", ["artist_id", "event_id"], name: "index_artists_events_on_artist_id_and_event_id", using: :btree
  add_index "artists_events", ["event_id", "artist_id"], name: "index_artists_events_on_event_id_and_artist_id", using: :btree

  create_table "events", force: true do |t|
    t.integer  "year"
    t.integer  "timeline_id"
    t.text     "event_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "events", ["timeline_id"], name: "index_events_on_timeline_id", using: :btree

  create_table "timelines", force: true do |t|
    t.integer "birthyear"
    t.text    "title"
  end

end
