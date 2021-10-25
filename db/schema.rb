# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_25_010246) do

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.string "thumbnail_one"
    t.string "thumbnail_two"
    t.string "thumbnail_three"
    t.string "image"
    t.string "project_url"
    t.string "role_in_project"
    t.string "project_tech_stack"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
