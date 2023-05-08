
class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.role == 'admin'
      can :manage, :all
      can :access, :admin_dashboard # cho phép admin truy cập dashboard
      can :manage, :admin_users_index
    else
      can :read, :all
      can :create, Todo
      can :update, Todo, user_id: user.id
      # can :destroy, Todo, user_id: user.id
    end
  end
end
