class CreateSuperhero < ActiveRecord::Migration[5.2]
  def change
    create_table :superheros do |t|
      t.text :name, null: false
      t.integer :power, null: false
      t.text :secret_identity, null: false
      
      t.timestamps
    end
    add_index :superheros, :name, unique: true
    add_index :superheros, :power
    add_index :superheros, :secret_identity, unique: true
  end
end
