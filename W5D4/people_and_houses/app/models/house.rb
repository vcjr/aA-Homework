# == Schema Information
#
# Table name: houses
#
#  id         :bigint           not null, primary key
#  address    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class House < ApplicationRecord
    validates :address, presence: true

    has_many :residents,
        foreign_key: :house_id,
        primary_key: :id,
        class_name: :Person
end
