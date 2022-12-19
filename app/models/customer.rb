class Customer < ApplicationRecord
    has_secure_password
    validates :username, :password, :name, presence: true

    has_many :carts
end
