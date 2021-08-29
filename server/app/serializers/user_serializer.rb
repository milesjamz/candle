class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :birthday, :email, :avatar
end
