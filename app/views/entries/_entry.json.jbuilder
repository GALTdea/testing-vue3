json.extract! entry, :id, :title, :message_id, :created_at, :updated_at
json.url entry_url(entry, format: :json)
