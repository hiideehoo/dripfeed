package com.sm.dripfeed.Repositories;

import com.sm.dripfeed.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}