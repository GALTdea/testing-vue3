json.extract! message, :id, :title, :msg1, :msg2, :msg3, :created_at, :updated_at
json.url message_url(message, format: :json)
