class Customer < ApplicationRecord
    has_secure_password
    validates :username, :password, :password_confirmation, :name, presence: true

    has_many :carts
end
