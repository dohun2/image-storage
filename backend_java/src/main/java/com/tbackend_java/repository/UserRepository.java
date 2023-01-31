package com.tbackend_java.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.repository.query.Param;

import com.tbackend_java.entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{
	
	@Transactional @Modifying(clearAutomatically = true)
	@Query(value = "INSERT INTO imgst.users(id, \"password\", email) VALUES( :#{#user.id}, :#{#user.password}, :#{#user.email}) ", nativeQuery = true)
	int createUserBy(@Param("user")Users user);
	
}
