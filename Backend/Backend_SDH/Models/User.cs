﻿namespace Backend_SDH.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        Account Account { get; set; }
        public UserRole Role { get; set; }
    }
}
