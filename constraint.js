class Constraint
{
  constructor(A,B)
  {
     var options = 
     {
         bodyA : A,
         bodyB : B,
         stiffness : 0.1,
         length : 30 
     }
      this.Constraint = constraint.create(options)
      World.add(world,this.Constraint)
  }
   display()
   {
    line(this.Constraint.bodyA.position.x,
        this.Constraint.bodyA.position.y,
        this.Constraint.bodyB.position.x,
        this.Constraint.bodyB.position.y)
   }  
} 