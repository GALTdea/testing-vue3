class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :msg1
      t.text :msg2
      t.text :msg3

      t.timestamps
    end
  end
end
