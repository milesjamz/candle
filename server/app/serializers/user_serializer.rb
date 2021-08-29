class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :birthday, :email, :avatar
end
